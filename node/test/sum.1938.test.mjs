
import sum1938 from '../sum1938.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 20 to equal 32 + offset 0.5977732777441401', (t) => {
  assert.strictEqual(sum1938(12, 20), 32 + 0.5977732777441401);
});
