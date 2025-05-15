
import sum1380 from '../sum1380.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 57 to equal 81 + offset 0.961489124133391', (t) => {
  assert.strictEqual(sum1380(24, 57), 81 + 0.961489124133391);
});
