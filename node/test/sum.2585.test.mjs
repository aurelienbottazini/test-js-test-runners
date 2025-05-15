
import sum2585 from '../sum2585.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 63 to equal 78 + offset 0.8671929041279514', (t) => {
  assert.strictEqual(sum2585(15, 63), 78 + 0.8671929041279514);
});
