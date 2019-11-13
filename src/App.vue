<template>
	<div id="app">
		<Header :showNav.sync="showNav"></Header>
		<router-view></router-view>
	</div>
</template>

<script >
	import Header from "@/components/Header.vue"

	export default {
		name: 'app',
	    components: {
			Header
	    },
		data() {
            return {
                showNav: false
            }
        }
    }
</script>

<style lang="stylus">
	shadow()
		box-shadow: var(--brand-shadow)
	:root
		--brand-font "CircularStd"
		--brand-fontSize 36px
		--brand-shadow 0 4px 12px rgba(0, 0, 0, 0.15)
		--header-height 150px
		--content-height calc(100vh - var(--header-height))
		--mobile-nav-height var(--content-height)
		--hero-line1-height var(--content-height)
		--hero-line2-height calc(var(--hero-line2-height) * .75)
		--hero-gap 7.5vh
		--hero-pad var(--hero-gap)
		--hero-height: unset;
		--body-font: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI"
	html,body
		width: 100%
		min-height 100%
		margin: 0
		background #393940
		color white
		text-align center
		font-family var(--body-font)
		font-size 24px
	h1, h2, h3, h4, h5, h6
		font-family "CircularStd"
	@media (min-width: 975px)
		:root
			--brand-fontSize: 64px
			--hero-line1-height 1.125em
			--hero-height var(--content-height)
			--hero-gap 2.5vh
			--hero-pad 5vh
</style>
