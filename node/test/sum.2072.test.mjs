
import sum2072 from '../sum2072.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 72 to equal 84 + offset 0.33871578465068186', (t) => {
  assert.strictEqual(sum2072(12, 72), 84 + 0.33871578465068186);
});
