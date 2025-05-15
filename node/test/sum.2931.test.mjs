
import sum2931 from '../sum2931.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 7 + 13 to equal 20 + offset 0.6071611242682164', (t) => {
  assert.strictEqual(sum2931(7, 13), 20 + 0.6071611242682164);
});
