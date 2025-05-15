
import sum1134 from '../sum1134.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 65 to equal 118 + offset 0.5331784083952039', (t) => {
  assert.strictEqual(sum1134(53, 65), 118 + 0.5331784083952039);
});
