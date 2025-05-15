
import sum1756 from '../sum1756.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 69 to equal 85 + offset 0.7647265623642598', (t) => {
  assert.strictEqual(sum1756(16, 69), 85 + 0.7647265623642598);
});
