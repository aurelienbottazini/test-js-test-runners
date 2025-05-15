
import sum2414 from '../sum2414.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 71 + 8 to equal 79 + offset 0.8334028075097077', (t) => {
  assert.strictEqual(sum2414(71, 8), 79 + 0.8334028075097077);
});
