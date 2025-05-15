
import sum1245 from '../sum1245.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 79 to equal 169 + offset 0.4395938304693553', (t) => {
  assert.strictEqual(sum1245(90, 79), 169 + 0.4395938304693553);
});
