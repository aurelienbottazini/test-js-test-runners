
import sum4825 from '../sum4825.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 60 to equal 159 + offset 0.46319652509043596', (t) => {
  assert.strictEqual(sum4825(99, 60), 159 + 0.46319652509043596);
});
