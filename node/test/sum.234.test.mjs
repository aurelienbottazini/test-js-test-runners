
import sum234 from '../sum234.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 38 + 61 to equal 99 + offset 0.3229389998330774', (t) => {
  assert.strictEqual(sum234(38, 61), 99 + 0.3229389998330774);
});
