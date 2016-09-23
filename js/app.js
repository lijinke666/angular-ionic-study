/**
 * Created by Administrator on 2016/9/20.
 */

var ionicApp = angular.module('ionicApp',['ngRoute','ionic','tabModule']);

//配置路由
ionicApp.config(function( $stateProvider, $urlRouterProvider ){
    $stateProvider
    .state('tab',{
        url:"/tab",                     //tab是父页面
        templateUrl:"views/tab.html"    //加载选项卡
    })
    .state('tab.home',{                 //父路由.子路由   的方式
        url:"/home",
        views:{
            "tab-home":{                    //ion-nav-view  视图的名字
                templateUrl:"views/home.html",        //这个视图加载的模板页面
                controller:"homeCtrl"                 //这个页面的控制器
            }
        }
    })
    .state('tab.movie',{
        url:"/movie",
        views:{
            "tab-movie":{
                templateUrl:"views/movie.html",
                controller:"movieCtrl"
            }
        }
    })
    .state('movieDetail',{
        url:"/movieDetail/:id",
        templateUrl:"views/movieDetail.html",
        controller:"movieDetailCtrl"
    })
    .state('tab.music',{
        url:"/music",
        views:{
            "tab-music":{
                templateUrl:"views/music.html",
                controller:"musicCtrl"
            }
        }
    })
    .state('musicDetail',{
        url:"/musicDetail/:id",
        templateUrl:"views/musicDetail.html",
        controller:"musicDetailCtrl"
    })
    .state('tab.about',{
        url:"/about",
        views:{
            "tab-about":{
                templateUrl:"views/about.html",
                controller:"aboutCtrl"
            }
        }
    })

    .state("login",{
        url:"/login",
        templateUrl:"views/login.html",
        controller:"loginCtrl"
    });
    $urlRouterProvider.otherwise("/tab/home");
});
