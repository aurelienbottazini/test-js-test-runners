
import sum1703 from '../sum1703.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 38 to equal 48 + offset 0.3189181280790463', (t) => {
  assert.strictEqual(sum1703(10, 38), 48 + 0.3189181280790463);
});
