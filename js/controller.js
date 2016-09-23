/**
 * Created by Administrator on 2016/9/22.
 */

var tabModule = angular.module('tabModule',[]);
//欢迎页面
tabModule.controller('homeCtrl',function($scope){
    $scope.homeTitle = "首页"
});
//音乐
tabModule.controller('musicCtrl',function($scope,$state,$http){
    $scope.musicTitle = "音乐列表";
    $http.get("music.json").success(function(data){
        $scope.musicData = data;
    })

    $scope.toMusicDetail = function( id ){
        $state.go('musicDetail',{
            "id":id
        })
    }

});
tabModule.controller('musicDetailCtrl',function( $scope,$state,$stateParams,$http ){
    //然后详情页 使用$stateParams.参数名  获取到传递过来的参数
    var musicId = $stateParams.id;
    $http.get("music.json").success(function(data){
        $scope.musicDetailData = data[musicId-1];
    })
});
//电影
tabModule.controller('movieCtrl',function($scope,$http,$ionicLoading,$state ){
    $scope.movieTitle = "电影列表";
    $ionicLoading.show({
        content: '加载中..',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
    })
    $scope.loadMovieData = function(){
        $http
            .get("newmovie.json")
            .success(function(newdata){
                $scope.movieData = newdata;
            })
            .finally(function(){
                $scope.$broadcast('scroll.refreshComplete');
            })
    }
    $http.get("movie.json").success(function(data){
        $scope.movieData = data;
    }).then(function(){
       $ionicLoading.hide();
    });

    //给每个item  绑定一个点击事件  跳转到 movieDetail  状态  传递一个id
    $scope.toMovieDetail = function(id){
        $state.go("movieDetail",{        //跳转到 movieDetail状态  然后触发一个路由 并且发送一个参数过去
            "id":id                  // ‘参数名’:'参数值'
        })
    }

});
tabModule.controller("movieDetailCtrl",function( $scope,$state, $stateParams ,$http){
    //然后详情页 使用$stateParams.参数名  获取到传递过来的参数
   var movieId = $stateParams.id;
    $http.get("movie.json").success(function(data){
        var movieDetail = data[movieId-1];
        $scope.movieDetailData = movieDetail;
    })

})
//关于我们
tabModule.controller('aboutCtrl',function( $scope,$window ,$timeout,$ionicPopup,$ionicActionSheet){
    $scope.aboutTitle = "关于我们";
    $scope.showMenu = function(){
        var menu = $ionicActionSheet.show({
            buttons:[
                {
                    text:"哈哈哈"
                },
                {
                    text:"嘻嘻"
                }
            ],
            destructiveText: '删除',
            titleText: 'Modify your album',
            cancelText: '退出',
            cancel: function() {
                //退出按钮点击触发函数
                $ionicPopup.confirm({
                    title:"退出",
                    template: '确定要离开金珂影音网吗?'
                }).then(function( res ){
                    if(res){
                        $window.close();
                    }
                })
            },
            buttonClicked: function(index) {
                return true;
            }
        });

    }
});

//登录
tabModule.controller('loginCtrl',function( $scope,$ionicPopup ){
    $scope.loginTitle ="登录";
    $scope.loginForm = function(){
        $ionicPopup.alert({
            title:"登录成功",
            template:'<div class="color:red">222</div>'
        })
    }
});