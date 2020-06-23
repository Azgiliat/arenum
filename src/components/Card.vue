<template lang="pug">
  div.card
    div.card__img-wrapper
      img(class="card__img" :src="info.cardImage + '?width=300&height=300'")
    div.card__data.data
      p.data__date {{date}}
      div.data__name.name
        svg.name__icon(:class="info.paymentType === 'free' && 'name__icon--free'")
          use(:xlink:href="`#${info.paymentType === 'free' ? 'free' : 'ticket'}`")
        p.name__text {{info.name}}
      p.data__tournament-info.tournament-info
        span.tournament-info__type.tournament-info__block {{info.gameMode}}
        span.tournament-info__separator
        span.tournament-info__people.tournament-info__block
          span.tournament-info__count {{info.participateCount}}/
          span.tournament-info__max {{info.maxUsers}}
        span.tournament-info__separator
        span.tournament-info__prize.tournament-info__block Призовой фонд {{prize}} руб.
</template>

<script>
  import moment from 'moment'
  export default {
    name: "Card",
    props: {
      info: {
        type: Object,
        require: true
      }
    },
    computed: {
      date() {
        moment.locale('ru');
        return moment(this.info.startedAt).format('DD MMMM, в h:mm')
      },
      prize() {
        return this.info.prizeTable.reduce((accum, val) => accum + val, 0)
      }
    }
  }
</script>

<style lang="stylus" scoped>
.card
  padding: 0 0 0 20px;
  display flex;
  background-color: black;
  align-items: center;

  &__img-wrapper
    width: 60px;
    height: 60px;
    border: 1px solid rgba(242, 242, 242, 0.1);
    box-sizing: border-box;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    overflow: hidden;
    margin-right 16px;
  &__img
    width: 100%;
    height: 100%;

  .data
    flex-grow: 1;
    box-shadow: 0 0.5px 0 borderColor;
    padding-top: 18px;
    padding-bottom: 18px;
    transition: box-shadow transition;

    &__date
      margin: 0;
      color: white;
      font-weight: 500;
      font-size: 11px;
      line-height: 14px;
      letter-spacing: 0.2;
      text-transform: uppercase;
    &__tournament-info
      margin: 0;
    &:hover
      cursor: pointer;
      box-shadow: 0 0.5px 0 borderColorHover;

  .tournament-info
    color: grey;
    font-size: 15px;
    line-height: 20px;
    display: flex;
    align-items: center;

    &__block
      display: block;
    &__separator
      display: block;
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background-color: grey;
      margin-right: 5px;
      margin-left: 5px;

  .name
    display: flex;
    align-items: center;
    margin-top: 2px;

    &__icon
      width: 20px;
      height: 20px;
      display block;
      margin-right: 6px;
    &__icon--free
      height: 12px;
    &__text
      margin: 0;
      font-weight: 500;
      font-size: 17px;
      line-height: 24px;
      color: lightWhite;
</style>