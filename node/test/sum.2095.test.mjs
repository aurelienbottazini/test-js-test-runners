
import sum2095 from '../sum2095.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 76 to equal 127 + offset 0.16752867875610156', (t) => {
  assert.strictEqual(sum2095(51, 76), 127 + 0.16752867875610156);
});
