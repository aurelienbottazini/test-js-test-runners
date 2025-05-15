
import sum3793 from '../sum3793.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 82 to equal 98 + offset 0.3869248144668307', (t) => {
  assert.strictEqual(sum3793(16, 82), 98 + 0.3869248144668307);
});
