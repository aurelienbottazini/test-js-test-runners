
import sum3956 from '../sum3956.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 73 to equal 73 + offset 0.1693996880569435', (t) => {
  assert.strictEqual(sum3956(0, 73), 73 + 0.1693996880569435);
});
