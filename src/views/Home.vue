<template>
	<div class="home hero">
		<h1>not a media&nbsp;group</h1>
		<h2>services for artists and fans</h2>
		<nav>
			<router-link to="fans" class="darkButton">for fans</router-link>
			<router-link to="artists" class="darkButton">for artists</router-link>
		</nav>
	</div>
</template>

<script>
    // @ is an alias to /src
    import Header from "@/components/Header";

    export default {
        name: 'home',
        components: {
            Header
        }
    }
</script>

<style lang="stylus">
	.hero
		font-family "CircularStd"
		display: grid
		grid-gap: var(--hero-gap)
		padding var(--hero-pad) 0
		height: var(--hero-height)
		grid-template-rows 1fr .75fr .25fr
		position: relative
		box-sizing border-box
		*
			margin 0
	h1
		font-size 108px
		align-self center
	h2
		font-size 72px
		align-self top
	nav
		display grid
		grid-gap 20px
		grid-template-columns repeat(auto-fit, 250px)
		justify-content center
		a
			color: inherit
			text-decoration: none
		a.darkButton
			display inline-block
			background #2e2e33
			width: 250px
			height 100px
			border-radius 5px
			line-height 100px
			font-size 36px
</style>