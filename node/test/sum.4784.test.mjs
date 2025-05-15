
import sum4784 from '../sum4784.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 98 to equal 195 + offset 0.5549163292987512', (t) => {
  assert.strictEqual(sum4784(97, 98), 195 + 0.5549163292987512);
});
