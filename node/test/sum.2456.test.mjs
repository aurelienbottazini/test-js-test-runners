
import sum2456 from '../sum2456.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 35 to equal 116 + offset 0.42493914370744656', (t) => {
  assert.strictEqual(sum2456(81, 35), 116 + 0.42493914370744656);
});
