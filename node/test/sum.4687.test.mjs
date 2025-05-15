
import sum4687 from '../sum4687.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 84 + 67 to equal 151 + offset 0.11307911923418879', (t) => {
  assert.strictEqual(sum4687(84, 67), 151 + 0.11307911923418879);
});
