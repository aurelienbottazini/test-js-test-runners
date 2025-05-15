
import sum1362 from '../sum1362.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 69 to equal 167 + offset 0.443164496198725', (t) => {
  assert.strictEqual(sum1362(98, 69), 167 + 0.443164496198725);
});
