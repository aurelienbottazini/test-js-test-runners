
import sum1270 from '../sum1270.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 82 to equal 168 + offset 0.3119032695845956', (t) => {
  assert.strictEqual(sum1270(86, 82), 168 + 0.3119032695845956);
});
