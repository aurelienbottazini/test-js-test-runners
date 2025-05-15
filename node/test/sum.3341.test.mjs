
import sum3341 from '../sum3341.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 16 to equal 106 + offset 0.6612805606824235', (t) => {
  assert.strictEqual(sum3341(90, 16), 106 + 0.6612805606824235);
});
