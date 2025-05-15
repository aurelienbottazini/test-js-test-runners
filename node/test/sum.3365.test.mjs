
import sum3365 from '../sum3365.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 79 to equal 129 + offset 0.3599013199181307', (t) => {
  assert.strictEqual(sum3365(50, 79), 129 + 0.3599013199181307);
});
