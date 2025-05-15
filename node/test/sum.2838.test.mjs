
import sum2838 from '../sum2838.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 79 + 57 to equal 136 + offset 0.8062272747253841', (t) => {
  assert.strictEqual(sum2838(79, 57), 136 + 0.8062272747253841);
});
