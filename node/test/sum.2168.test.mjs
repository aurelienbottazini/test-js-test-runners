
import sum2168 from '../sum2168.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 64 to equal 119 + offset 0.6110047944067284', (t) => {
  assert.strictEqual(sum2168(55, 64), 119 + 0.6110047944067284);
});
