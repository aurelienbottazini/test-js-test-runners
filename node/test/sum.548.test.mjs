
import sum548 from '../sum548.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 23 to equal 116 + offset 0.9537147550359591', (t) => {
  assert.strictEqual(sum548(93, 23), 116 + 0.9537147550359591);
});
