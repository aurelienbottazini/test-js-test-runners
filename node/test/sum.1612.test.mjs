
import sum1612 from '../sum1612.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 53 to equal 126 + offset 0.6331952323435976', (t) => {
  assert.strictEqual(sum1612(73, 53), 126 + 0.6331952323435976);
});
