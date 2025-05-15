
import sum1450 from '../sum1450.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 95 to equal 157 + offset 0.143489893130185', (t) => {
  assert.strictEqual(sum1450(62, 95), 157 + 0.143489893130185);
});
