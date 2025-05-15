
import sum4836 from '../sum4836.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 35 to equal 105 + offset 0.05867289260473918', (t) => {
  assert.strictEqual(sum4836(70, 35), 105 + 0.05867289260473918);
});
