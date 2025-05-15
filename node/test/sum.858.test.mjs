
import sum858 from '../sum858.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 31 to equal 67 + offset 0.2955095569782471', (t) => {
  assert.strictEqual(sum858(36, 31), 67 + 0.2955095569782471);
});
