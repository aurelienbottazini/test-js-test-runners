
import sum2651 from '../sum2651.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 37 + 66 to equal 103 + offset 0.11320624767111809', (t) => {
  assert.strictEqual(sum2651(37, 66), 103 + 0.11320624767111809);
});
