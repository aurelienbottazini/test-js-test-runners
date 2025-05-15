
import sum4370 from '../sum4370.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 38 to equal 131 + offset 0.3019561477664131', (t) => {
  assert.strictEqual(sum4370(93, 38), 131 + 0.3019561477664131);
});
