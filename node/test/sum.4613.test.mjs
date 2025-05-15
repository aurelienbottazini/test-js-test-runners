
import sum4613 from '../sum4613.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 13 to equal 61 + offset 0.7737332713031831', (t) => {
  assert.strictEqual(sum4613(48, 13), 61 + 0.7737332713031831);
});
