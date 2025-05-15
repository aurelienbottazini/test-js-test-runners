
import sum1790 from '../sum1790.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 29 to equal 75 + offset 0.5478427071582046', (t) => {
  assert.strictEqual(sum1790(46, 29), 75 + 0.5478427071582046);
});
