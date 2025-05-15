
import sum4975 from '../sum4975.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 72 to equal 112 + offset 0.5989890442961041', (t) => {
  assert.strictEqual(sum4975(40, 72), 112 + 0.5989890442961041);
});
