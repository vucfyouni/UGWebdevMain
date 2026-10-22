import {test} from 'node:test';
import assert from 'node:assert/strict';
import {estimate,carePlans} from '../lib/pricing.ts';
test('base packages match the published business model',()=>{assert.deepEqual(estimate(0,0,[],false),{low:400,high:700});assert.deepEqual(estimate(1,0,[],false),{low:900,high:1800});assert.deepEqual(estimate(2,0,[],false),{low:2000,high:4000});});
test('pages and add-ons combine before rush surcharge',()=>{assert.deepEqual(estimate(1,2,['seo','booking','commerce'],false),{low:1800,high:4000});assert.deepEqual(estimate(1,2,['seo','booking','commerce'],true),{low:2160,high:5400});});
test('deselected additions leave no residual cost',()=>{assert.deepEqual(estimate(0,0,[],false),{low:400,high:700});assert.deepEqual(estimate(0,1,['booking'],false),{low:650,high:1300});assert.deepEqual(estimate(0,0,[],false),{low:400,high:700});});
test('monthly care pricing stays separate from project estimates',()=>{assert.deepEqual(carePlans.map(p=>p.price),[0,20,60,125]);assert.deepEqual(estimate(0,0,[],false),{low:400,high:700});});
