
import sum4935 from '../sum4935.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 76 to equal 161 + offset 0.8217124696514857', (t) => {
  assert.strictEqual(sum4935(85, 76), 161 + 0.8217124696514857);
});
