
import sum4967 from '../sum4967.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 70 to equal 132 + offset 0.39793709299627666', (t) => {
  assert.strictEqual(sum4967(62, 70), 132 + 0.39793709299627666);
});
