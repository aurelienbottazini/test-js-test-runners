
import sum267 from '../sum267.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 41 + 68 to equal 109 + offset 0.5510453391594705', (t) => {
  assert.strictEqual(sum267(41, 68), 109 + 0.5510453391594705);
});
