
import sum3397 from '../sum3397.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 17 to equal 34 + offset 0.9159207494975449', (t) => {
  assert.strictEqual(sum3397(17, 17), 34 + 0.9159207494975449);
});
