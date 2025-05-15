
import sum4706 from '../sum4706.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 20 + 68 to equal 88 + offset 0.5266596216966513', (t) => {
  assert.strictEqual(sum4706(20, 68), 88 + 0.5266596216966513);
});
