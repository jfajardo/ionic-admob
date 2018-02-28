import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import { PaginaPage } from '../pagina/pagina';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController,
    private adMobFree: AdMobFree) {
    this.showBannerAd();
    this.mostrarAnuncioInterticial();
  }

  async showBannerAd() {
    try {
      const bannerConfig: AdMobFreeBannerConfig = {
        id: 'ca-app-pub-3940256099942544/6300978111',
        isTesting: true,
        autoShow: true
      }
      this.adMobFree.banner.config(bannerConfig);
      await this.adMobFree.banner.prepare();
      this.adMobFree.banner.show();
    }
    catch (e) {
      console.error(e);
    }
  }

  mostrarVideoPublicidad(){
    const bannerConfig: AdMobFreeBannerConfig = {
      id: 'ca-app-pub-3940256099942544/5224354917',
      isTesting: true,
      autoShow: true
    };
    this.adMobFree.rewardVideo.config(bannerConfig);
    this.adMobFree.rewardVideo.prepare()
    .then(() => {
        this.adMobFree.rewardVideo.show()
    })
    .catch(e => console.log(e));
  }

  mostrarAnuncioInterticial(){
    const bannerConfig: AdMobFreeBannerConfig = {
      id: 'ca-app-pub-3940256099942544/1033173712',
      isTesting: true,
      autoShow: true
    };
    this.adMobFree.interstitial.config(bannerConfig);
    this.adMobFree.interstitial.prepare()
    .then(() => {
        this.adMobFree.interstitial.show()
    })
    .catch(e => console.log(e));
  }

  navegar(){
    this.navCtrl.push(PaginaPage);
  }


}
