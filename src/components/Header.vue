<template>
	<header>
		<div class="brand">
			<router-link to="/">
				<logo class="logo" viewBox="0 0 500 500" alt="dbmndt logo"></logo>
				<div class="name">dbmndt</div>
			</router-link>
			<button @click="toggleNav">
				<menu-icon viewBox="0 0 24 24" v-if="nav"></menu-icon>
				<close-icon viewBox="0 0 24 24" v-else></close-icon>
			</button>
		</div>
		<nav :hidden="nav">

			<router-link to="about">about</router-link>
			<router-link to="fans">fans</router-link>
			<router-link to="artists">artists</router-link>
		</nav>
	</header>
</template>

<script>
    import logo from "@/assets/Logo.svg"
    import { menu, close } from "@/icons.js"
    export default {
        name: "Header",
	    components: {
            logo,
		    menuIcon: menu,
		    closeIcon: close
	    },
	    data() {
           return {
               nav: true
           }
	    },
	    methods: {
            toggleNav() {
				this.nav = !this.nav
            },
            closeNav() {
                this.nav = false
            }
	    }
    }
</script>

<style lang="stylus">

	shadow()
		box-shadow: var(--brand-shadow)


	header
		font-family "CircularStd"
		background #2E2E33
		height: 150px
		//text-align center
		shadow()
		*
			display: inline-block
			vertical-align top
		.brand
			height: 150px
			width: 100%
			font-size 48px
			a
				color: inherit
			.logo, .name
				display inline-block
				height 150px
			.logo
				width 100px
				height: 100px
				margin: 25px 0
				left: 0
			.name
				max-width 305px
				text-align center
				font bold var(--brand-fontSize) var(--brand-font)
				line-height 150px
		nav
			width 100%
			height calc(100vh - 150px)
			position relative
			font-size 36px
			padding 20px
			display inline-grid
			grid-gap 20px
			background #393940
			box-sizing border-box
			grid-template-rows repeat(auto-fit, 90px)
			z-index 1
			a
				padding ((150px - 90px)/2)
				box-sizing border-box
				border-radius 5px
				text-decoration none
				color inherit
				line-height 100%
				&:hover
					background rgba(#fff, 0.25)
		button
			width 70px;
			height 70px;
			padding 0
			background transparent
			border 0
			color inherit
			vertical-align center
			margin 40px 10px
			svg
				width 90%
				height 90%
			&:hover
				background rgba(#fff, 0.25)
				border-radius: 5px
		nav[hidden]
			display none

	@media screen and (min-width: 975px)
		header
			height: 150px
			.brand
				float left
				max-width: 445px
			button
				display: none
			nav
				grid-template-columns repeat(3, max-content)
				align-content space-around
				grid-template-rows 90px
				height 150px
				max-width: 510px
				float right
				background unset
			nav[hidden]
				display: inline-grid
</style>