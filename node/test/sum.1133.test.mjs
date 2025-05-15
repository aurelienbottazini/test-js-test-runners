
import sum1133 from '../sum1133.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 49 to equal 73 + offset 0.30130434626801217', (t) => {
  assert.strictEqual(sum1133(24, 49), 73 + 0.30130434626801217);
});
