
import sum2879 from '../sum2879.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 49 to equal 108 + offset 0.331336462292127', (t) => {
  assert.strictEqual(sum2879(59, 49), 108 + 0.331336462292127);
});
