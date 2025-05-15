
import sum2362 from '../sum2362.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 72 + 39 to equal 111 + offset 0.5567403223050774', (t) => {
  assert.strictEqual(sum2362(72, 39), 111 + 0.5567403223050774);
});
