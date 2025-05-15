
import sum259 from '../sum259.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 49 + 76 to equal 125 + offset 0.9709897359265774', (t) => {
  assert.strictEqual(sum259(49, 76), 125 + 0.9709897359265774);
});
