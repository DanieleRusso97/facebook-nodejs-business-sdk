/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * AdNetworkAnalyticsSyncQueryResult
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdNetworkAnalyticsSyncQueryResult extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      query_id: 'query_id',
      results: 'results',
    });
  }

  static get AggregationPeriod (): Object {
    return Object.freeze({
      day: 'DAY',
      total: 'TOTAL',
    });
  }
  static get Breakdowns (): Object {
    return Object.freeze({
      ad_server_campaign_id: 'AD_SERVER_CAMPAIGN_ID',
      ad_space: 'AD_SPACE',
      age: 'AGE',
      app: 'APP',
      clicked_view_tag: 'CLICKED_VIEW_TAG',
      country: 'COUNTRY',
      deal: 'DEAL',
      deal_ad: 'DEAL_AD',
      deal_page: 'DEAL_PAGE',
      delivery_method: 'DELIVERY_METHOD',
      display_format: 'DISPLAY_FORMAT',
      fail_reason: 'FAIL_REASON',
      gender: 'GENDER',
      instant_article_id: 'INSTANT_ARTICLE_ID',
      instant_article_page_id: 'INSTANT_ARTICLE_PAGE_ID',
      is_deal_backfill: 'IS_DEAL_BACKFILL',
      placement: 'PLACEMENT',
      placement_name: 'PLACEMENT_NAME',
      platform: 'PLATFORM',
      property: 'PROPERTY',
      sdk_version: 'SDK_VERSION',
    });
  }
  static get Metrics (): Object {
    return Object.freeze({
      fb_ad_network_bidding_bid_rate: 'FB_AD_NETWORK_BIDDING_BID_RATE',
      fb_ad_network_bidding_request: 'FB_AD_NETWORK_BIDDING_REQUEST',
      fb_ad_network_bidding_response: 'FB_AD_NETWORK_BIDDING_RESPONSE',
      fb_ad_network_bidding_revenue: 'FB_AD_NETWORK_BIDDING_REVENUE',
      fb_ad_network_bidding_win_rate: 'FB_AD_NETWORK_BIDDING_WIN_RATE',
      fb_ad_network_click: 'FB_AD_NETWORK_CLICK',
      fb_ad_network_cpm: 'FB_AD_NETWORK_CPM',
      fb_ad_network_ctr: 'FB_AD_NETWORK_CTR',
      fb_ad_network_filled_request: 'FB_AD_NETWORK_FILLED_REQUEST',
      fb_ad_network_fill_rate: 'FB_AD_NETWORK_FILL_RATE',
      fb_ad_network_imp: 'FB_AD_NETWORK_IMP',
      fb_ad_network_impression_rate: 'FB_AD_NETWORK_IMPRESSION_RATE',
      fb_ad_network_request: 'FB_AD_NETWORK_REQUEST',
      fb_ad_network_revenue: 'FB_AD_NETWORK_REVENUE',
      fb_ad_network_show_rate: 'FB_AD_NETWORK_SHOW_RATE',
      fb_ad_network_ua_spend: 'FB_AD_NETWORK_UA_SPEND',
      fb_ad_network_video_guarantee_revenue: 'FB_AD_NETWORK_VIDEO_GUARANTEE_REVENUE',
      fb_ad_network_video_mrc: 'FB_AD_NETWORK_VIDEO_MRC',
      fb_ad_network_video_mrc_rate: 'FB_AD_NETWORK_VIDEO_MRC_RATE',
      fb_ad_network_video_view: 'FB_AD_NETWORK_VIDEO_VIEW',
      fb_ad_network_video_view_rate: 'FB_AD_NETWORK_VIDEO_VIEW_RATE',
    });
  }
  static get OrderingColumn (): Object {
    return Object.freeze({
      metric: 'METRIC',
      time: 'TIME',
      value: 'VALUE',
    });
  }
  static get OrderingType (): Object {
    return Object.freeze({
      ascending: 'ASCENDING',
      descending: 'DESCENDING',
    });
  }
}
