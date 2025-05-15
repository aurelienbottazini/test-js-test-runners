
import sum3463 from '../sum3463.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 71 + 8 to equal 79 + offset 0.7083894122060963', (t) => {
  assert.strictEqual(sum3463(71, 8), 79 + 0.7083894122060963);
});
